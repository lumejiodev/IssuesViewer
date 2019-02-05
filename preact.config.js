import envVars from 'preact-cli-plugin-env-vars';

export default function(config, env, helpers) {
	config.resolve.extensions.unshift('.mjs'); // for GraphQL
	envVars(config, env, helpers);
}
