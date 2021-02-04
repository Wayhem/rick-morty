const routes = {
  home: '/',
  login: '/login',
  favorites: '/favorites',
  character: '/character/:id',
  buildCharacter: (id: string | number): string => `/character/${id}`
}

export default routes
