@echo off

git config --global user.name 'Miguel Rodriguez Gonzalez'
git config --global user.email 'correo'

git config --global alias.st 'status -sb'
git config --global alias.ll 'log --oneline'
git config --global alias.llg 'log --oneline --graph'
git config --global alias.cm 'commit -m'
git config --global -l