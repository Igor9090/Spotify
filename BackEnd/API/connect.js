import {MongoClient} from 'mongodb'

const URI = "mongodb+srv://IgorVn:J8xbmckmRZ3yG2mb@spotifycluster.dm3bdv5.mongodb.net/?retryWrites=true&w=majority&appName=SpotifyCluster"

const client = new MongoClient(URI);

export const db = client.db("Spotify");