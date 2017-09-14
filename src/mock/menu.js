import MenuList from '../utils/menu'

const { config } = require('./common')

const { apiPrefix } = config
let database = MenuList.database

module.exports = {

  [`GET ${apiPrefix}/menus`] (req, res) {
    res.status(200).json(database)
  },
}
