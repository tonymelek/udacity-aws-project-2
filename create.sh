#!/bin/sh
while getopts s: flag
do
    case "${flag}" in
        s) stack=${OPTARG};;
    esac
done


aws cloudformation create-stack  --stack-name "${stack}" --region ap-southeast-2 --template-body "file://template.json"  --profile default
