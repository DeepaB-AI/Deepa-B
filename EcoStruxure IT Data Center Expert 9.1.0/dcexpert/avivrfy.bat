@echo off
::
:: Batch file to launch NetBotz Signed AVI verification tool
::
if "%1"=="" GOTO PRINT

".\jre\bin\java" -cp ".\plugins\com.apc.isxc.common_9.1.0.jar" com.netbotz.util.avi.VerifySignedAVI %*
GOTO END

:PRINT
@echo Usage: avivrfy avi1 avi2 avi3 ..."
@echo Example: aviverify test1.avi test2.avi

:END