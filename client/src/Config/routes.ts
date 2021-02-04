const routes = {
  home: '/',
  login: '/login',
  favorites: '/favorites',
  character: '/character/:id',
  buildCharacter: (id: string | number) => `/character/${id}`
}

export default routes
