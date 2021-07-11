set -e

removeGit() {
  rm -rf .git/
}

cloneGoStack() {
  mkdir GoStack
  cd GoStack
  
  git clone https://github.com/Lucas-Dalamarta/bootcamp-gostack.git
  mv bootcamp-gostack gostack && cd gostack && removeGit && cd ..
  git clone https://github.com/Lucas-Dalamarta/gostack-gobarber.git
  mv gostack-gobarber gobarber && cd gobarber && removeGit && cd ..
  git clone https://github.com/Lucas-Dalamarta/gostack-github-explorer.git
  mv gostack-github-explorer github-explorer && cd gostack-github-explorer && removeGit && cd ..
  
  mkdir challenges
  cd challenges
  git clone git@github.com:Lucas-Dalamarta/challenge-2-gostack.git
  git clone git@github.com:Lucas-Dalamarta/challenge-3-gostack.git
  git clone git@github.com:Lucas-Dalamarta/challenge-4-gostack.git
  git clone git@github.com:Lucas-Dalamarta/challenge-5-gostack.git
  git clone git@github.com:Lucas-Dalamarta/challenge-6-gostack.git
  git clone git@github.com:Lucas-Dalamarta/challenge-7-gostack.git
  git clone git@github.com:Lucas-Dalamarta/challenge-8-gostack.git
  git clone git@github.com:Lucas-Dalamarta/challenge-9-gostack.git
  git clone git@github.com:Lucas-Dalamarta/challenge-10-gostack.git
  git clone git@github.com:Lucas-Dalamarta/challenge-11-gostack.git
  mv challenge-2-gostack challenge-2 && cd challenge-2 && removeGit && cd .. 
  mv challenge-3-gostack challenge-3 && cd challenge-3 && removeGit && cd ..
  mv challenge-4-gostack challenge-4 && cd challenge-4 && removeGit && cd ..
  mv challenge-5-gostack challenge-5 && cd challenge-5 && removeGit && cd ..
  mv challenge-6-gostack challenge-6 && cd challenge-6 && removeGit && cd ..
  mv challenge-7-gostack challenge-7 && cd challenge-7 && removeGit && cd ..
  mv challenge-8-gostack challenge-8 && cd challenge-8 && removeGit && cd ..
  mv challenge-9-gostack challenge-9 && cd challenge-9 && removeGit && cd ..
  mv challenge-10-gostack challenge-10 && cd challenge-10 && removeGit && cd ..
  mv challenge-11-gostack challenge-11 && cd challenge-11 && removeGit && cd ..
  
  cd ~/Bootcamps
}

cloneIgnite() {
  mkdir Ignite
  cd Ignite
  git clone https://github.com/Lucas-Dalamarta/bootcamp-ignite.git
  mv bootcamp-ignite ignite && cd ignite && removeGit && cd ..

  mkdir challenges
  cd challenges
  git clone https://github.com/Lucas-Dalamarta/ignite-challenge-1.git
  mv ignite-challenge-1 challenge-1 && cd challenge-1 && removeGit && cd ..

  cd ~/Bootcamps
}

cloneNextLevelWeeks() {
  mkdir NextLevelWeeks
  cd NextLevelWeeks

  git clone https://github.com/Lucas-Dalamarta/Next-Level-Week.git
  git clone https://github.com/Lucas-Dalamarta/NLW2.git
  git clone https://github.com/Lucas-Dalamarta/NLW-4.git
  git clone https://github.com/Lucas-Dalamarta/NLW-Together.git

  mv Next-Level-Week NLW-1 && cd NLW-1 && removeGit && cd ..
  mv NLW2 NLW-2 && cd NLW-2 && removeGit && cd ..
  cd NLW-4 && removeGit && cd ..
  cd NLW-Together && removeGit && cd ..

  cd ~/Bootcamps
}

cloneReact4Gamers() {
  git clone https://github.com/Lucas-Dalamarta/React4Gamers.git
  cd React4Gamers && removeGit && cd ..
}



echo "Started cloning process"
cloneGoStack
cloneNextLevelWeeks
cloneIgnite
cloneReact4Gamers
echo "Finished cloning process"