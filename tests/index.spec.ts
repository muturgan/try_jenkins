import { replaceMoscowIataOnDefault } from '../src';


describe('just test', () => {

   test('DME', () =>
   {
      expect(replaceMoscowIataOnDefault('DME')).toBe('MOW');
   });

   test('SVO', () =>
   {
      expect(replaceMoscowIataOnDefault('SVO')).toBe('MOW');
   });

   test('VKO', () =>
   {
      expect(replaceMoscowIataOnDefault('VKO')).toBe('MOW');
   });

   test('ZIA', () =>
   {
      expect(replaceMoscowIataOnDefault('ZIA')).toBe('MOW');
   });

   test('MOW', () =>
   {
      expect(replaceMoscowIataOnDefault('MOW')).toBe('MOW');
   });

   test('BOJ', () =>
   {
      expect(replaceMoscowIataOnDefault('BOJ')).toBe('BOJ');
   });

});
