export const replaceMoscowIataOnDefault = (iataCode: string): string =>
{
   if (iataCode === 'DME' || iataCode === 'SVO' || iataCode === 'VKO' || iataCode === 'ZIA') {
      return 'MOW';
   }

   return iataCode;
};
