const { registerTsProject } = require('@nx/js/src/internal');

registerTsProject(__dirname, 'tsconfig.json');

require('./foo.ts')

