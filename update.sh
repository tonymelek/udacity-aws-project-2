while getopts s:t:p: flag
do
    case "${flag}" in
        s) stack=${OPTARG};;
        t) template=${OPTARG};;
        p) params=${OPTARG};;
    esac
done

if [ -e ${params}.json ]; then
aws cloudformation update-stack  --stack-name "${stack}" --region us-east-1 --template-body "file://${template}.yml" --parameters "file://${params}.json" --profile udacity
else
aws cloudformation update-stack  --stack-name "${stack}" --region us-east-1 --template-body "file://${template}.yml"  --profile udacity
fi