### Lots of stuff to upgrade

1. `rm -rf node_modules`
2. update global expo cli `npm install -g expo-cli`
  - if it throws errors it is probably because of permissions do `sudo chown -R myuser:staff /usr/local/lib/node_modules/`
3. `npm install`
4. `npm run start`
5. With any luck it works.
6. If it doesn't work. Uninstall the Expo app on your simulator and then do `npm run start` again.
7. Fingers crossed.