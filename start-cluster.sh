CLUSTER_NAME=development-cluster
ZONE=us-central1-a
POOL_SIZE=3
echo Starting cluster $CLUSTER_NAME
gcloud container clusters resize $CLUSTER_NAME --zone $ZONE --size=$POOL_SIZE --quiet
