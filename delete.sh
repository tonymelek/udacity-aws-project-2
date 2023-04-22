#!/bin/sh
while getopts s: flag
do
    case "${flag}" in
        s) stack=${OPTARG};;
    esac
done


aws cloudformation delete-stack --stack-name "${stack}" --region ap-southeast-2  --profile default
