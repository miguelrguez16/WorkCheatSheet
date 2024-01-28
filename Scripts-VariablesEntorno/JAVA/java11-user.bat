@echo off
set JAVA_HOME=C:\desarrollo\java\install\jdk-11.0.17+8
setx JAVA_HOME "%JAVA_HOME%"
set Path=%JAVA_HOME%\bin;%Path%
echo Java 11 activated as user default.
