#!/bin/bash

if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit
fi

for cmd_mkdir in "$@"; do
    mkdir ex$cmd_mkdir
done