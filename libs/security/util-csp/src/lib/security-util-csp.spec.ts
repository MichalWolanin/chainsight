import { securityUtilCsp } from './security-util-csp';

describe('securityUtilCsp', () => {
  it('should work', () => {
    expect(securityUtilCsp()).toEqual('security-util-csp');
  });
});
