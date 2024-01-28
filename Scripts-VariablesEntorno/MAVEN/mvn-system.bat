@echo off
set MVN_HOME=C:\Users\migue\install\apache-maven-3.8.6
setx MVN "%MVN_HOME%" /M
set Path=%MVN_HOME%\bin;%Path%
echo MVN 3.8.6 activated as system-wide default.
