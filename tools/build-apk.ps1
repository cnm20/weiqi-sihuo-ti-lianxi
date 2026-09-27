$ErrorActionPreference = 'Stop'

$root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$toolRoot = Join-Path $root '.android-tools'
$javaHome = Join-Path $toolRoot 'jdk\jdk-21.0.12.1'
$sdkRoot = Join-Path $toolRoot 'sdk'
$gradle = Join-Path $toolRoot 'gradle\gradle-8.14.3\bin\gradle.bat'

foreach ($required in @($javaHome, $sdkRoot, $gradle)) {
  if (-not (Test-Path $required)) {
    throw "Missing local Android build tool: $required"
  }
}

$env:JAVA_HOME = $javaHome
$env:ANDROID_HOME = $sdkRoot
$env:ANDROID_SDK_ROOT = $sdkRoot
$androidUserHome = Join-Path $env:TEMP 'kejie-tsumego-android-user-home'
$env:ANDROID_USER_HOME = $androidUserHome
$env:GRADLE_USER_HOME = Join-Path $toolRoot 'gradle-home'
New-Item -ItemType Directory -Force -Path $androidUserHome | Out-Null

Push-Location $root
try {
  & npm.cmd run build
  if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

  & npm.cmd run cap -- sync android
  if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

  Push-Location (Join-Path $root 'android')
  try {
    & $gradle --no-daemon assembleDebug
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
  } finally {
    Pop-Location
  }

  $apk = Join-Path $root 'android\app\build\outputs\apk\debug\app-debug.apk'
  $deliverableName = [string]::Concat([char]0x56F4, [char]0x68CB, [char]0x6B7B, [char]0x6D3B, [char]0x9898, '-debug.apk')
  $deliverable = Join-Path $root $deliverableName
  Copy-Item -LiteralPath $apk -Destination $deliverable -Force
  Write-Host "APK generated: $deliverable"
} finally {
  Pop-Location
}
