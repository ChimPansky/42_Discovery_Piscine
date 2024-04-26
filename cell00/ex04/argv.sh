#!/bin/bash

index=0

for arg in $@; do
    ((index = index + 1))
    if [ $index -gt 3 ]; then 
	break
    fi
    echo $arg
done
