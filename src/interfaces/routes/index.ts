export interface IRoute {
  children: React.ReactNode;
}

export interface IPrivateRouteProps extends IRoute {}
export interface IRedirectIfAuthenticatedProps extends IRoute {}
