// LOCAL DEV VARIABLES
let env = {
	NODE_ENV: 'development',
	PORT: 3000,
	DBPROTOCOL: 'mongodb',
	DBUSERNAME: 'treverjohnston',
	DBPASSWORD: 'G0disgood!',
	DBHOST: 'ds048537.mlab.com:48537',
	DBNAME: 'ebenezer',
	SERVERNAME: 'server'
}
// MAPS env TO ACTUAL ENVIRONMENT
Object.keys(env).forEach(v => {
	process.env[v] = process.env[v] || env[v]
}) 


// MongoDb Connection String Builder
env.CONNECTIONSTRING = `${env.DBPROTOCOL}://${env.DBUSERNAME}:${env.DBPASSWORD}@${env.DBHOST}/${env.DBNAME}`
process.env.CONNECTIONSTRING = env.CONNECTIONSTRING

exports = env
