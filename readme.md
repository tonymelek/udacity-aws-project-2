# ASG
You need to add `LaunchConfg/template` + `ASG`

# ELB
You need to add:
1. TargetGroup -->Ref Target group in ASG
2. LoadBalancer
3. Listener 
4. ListenerRule

### Copy s3 file to ec2 
1. Consider attach IAM Role with s3 read policy to the EC2, then run 
`aws s3 cp s3://project2-s3/index.html /var/www/html/index.html`


### Copy key-pair to jump-box instance
`scp -i "udacity-key-pair.pem"  udacity-key-pair.pem ec2-user@ec2-54-221-17-240.compute-1.amazonaws.com:/home/ec2-user`
