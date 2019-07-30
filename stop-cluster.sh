CLUSTER_NAME=development-cluster
ZONE=us-central1-a
echo Stopping cluster $CLUSTER_NAME
gcloud container clusters resize $CLUSTER_NAME --zone $ZONE --size=0 --quiet
