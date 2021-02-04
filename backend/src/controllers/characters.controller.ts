import { RequestHandler } from 'express'
import request from 'request'
import config from '../config'
import urls from '../constants/urls'

export const getCharacters: RequestHandler = (req, res) => {
  const { ids } = req.query
  const requestQuery = ids ? JSON.stringify(ids) : ''
  return request(`${config.BASE_URL}${urls.Characters}/${requestQuery}`, (err, response, body) => {
    if(err){
      res.status(400).send({
        success: false,
        error: err.message
      });
    }
    res.json(JSON.parse(body))
  });
}


export const getCharacter: RequestHandler = (req, res) =>
  request(`${config.BASE_URL}${urls.Characters}/${req.params.id}`, (err, response, body) => {
    if(err){
      res.status(400).send({
        success: false,
        error: err.message
      });
    }
    res.json(JSON.parse(body))
  });
