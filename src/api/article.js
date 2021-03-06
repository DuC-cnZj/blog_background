import axios from '@/libs/api.request'

export const index = ({ page, pageSize, query, all }) => {
  return axios.request({
    url: '/admin/articles',
    params: {
      page: page,
      page_size: pageSize,
      query: query,
      all
    },
    method: 'get'
  })
}

export const show = ({ id }) =>
  axios.request({
    url: `/admin/articles/${id}`,
    method: 'get'
  })

export const store = payload => {
  return axios.request({
    url: '/admin/articles',
    data: {
      content: payload.content,
      desc: payload.desc,
      title: payload.title,
      head_image: payload.headImage,
      category: payload.category,
      tags: payload.tags,
      display: payload.display
    },
    method: 'post'
  })
}

export const deleteArticle = id => {
  return axios.request({
    url: `/admin/articles/${id}`,
    method: 'delete'
  })
}

export const update = ({
  id,
  content,
  desc,
  title,
  headImage,
  category,
  tags,
  display
}) => {
  // console.log('here')

  return axios.request({
    url: `/admin/articles/${id}`,
    data: {
      content: content,
      desc: desc,
      title: title,
      head_image: headImage,
      category: category,
      tags: tags,
      display: display
    },
    method: 'put'
  })
}

export const categories = ({ query }) => {
  return axios.request({
    url: '/admin/categories',
    params: {
      q: query
    },
    method: 'get'
  })
}

export const changedisplay = id => {
  return axios.request({
    url: '/admin/article_change_display/' + id,
    method: 'put'
  })
}

export const setTop = id => {
  return axios.request({
    url: '/admin/article_set_top/' + id,
    method: 'put'
  })
}

export const cancelSetTop = id => {
  return axios.request({
    url: '/admin/article_cancel_set_top/' + id,
    method: 'put'
  })
}

export const tags = ({ query }) => {
  return axios.request({
    url: '/admin/tags',
    params: {
      q: query
    },
    method: 'get'
  })
}

export const elasticSearchArticle = ({ query }) => {
  return axios.request({
    url: '/search_articles',
    params: {
      q: query
    },
    method: 'get'
  })
}

export const adminElasticSearchArticle = ({ all = 0, query }) => {
  return axios.request({
    url: '/admin/search_articles',
    params: {
      q: query,
      all
    },
    method: 'get'
  })
}
