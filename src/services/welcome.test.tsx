import { welcome } from '../services/welcome';

describe('welcome', () => {
  it('should display a welcome alert', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    welcome();
    expect(window.alert).toHaveBeenCalledWith('Bem-vindo ao Dio Bank!');
  });
});