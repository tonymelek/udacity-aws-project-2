#!/bin/sh
while getopts s:t: flag
do
    case "${flag}" in
        s) stack=${OPTARG};;
        t) template=${OPTARG};;
    esac
done

aws cloudformation update-stack  --stack-name "${stack}" --region us-east-1 --template-body "file://${template}.yml"  --profile udacity
