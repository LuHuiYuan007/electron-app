module.exports = {
    publishers: [
        {
            name: '@electron-forge/publisher-github',
            config: {
                repository: {
                    owner: 'LuHuiYuan007',
                    name: 'electron-app'
                },
                prerelease: false,
                draft: true
            }
        }
    ]
}