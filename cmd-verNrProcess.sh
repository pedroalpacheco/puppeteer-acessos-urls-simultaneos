#!/bin/bash
#pgrep -l -c chrome

CONTADOR=0
while [  $CONTADOR -lt 2000 ]; do
      #echo "$CONTADOR";
      clear
      echo "Processos CHROME:" `pgrep -l -c chrome`
      sleep 2
      let CONTADOR=CONTADOR+1; 
done