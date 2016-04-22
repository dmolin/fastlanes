Fastlane Kanban Manager
==========================================================================

This project holds the codebase for the upcoming "Fastlanes" Kanban Manager project

This aim is to build a better "Trello", with more features and with a better pricing model.

Some of the features:
- Realtime Multiuser Kanban boards
- Card dependencies ('waiting on', 'linked to' states for a card)
- Card ID
- Sprints and Milestones
- Lane "snapshot" (useful to archive deployments and generate deployment reports)
- Gamification (powerups, badges, user stats, leveling up, etc)

### Technologies Used ###

- MeteorJS 1.3
- React 15.0
- Redux
- React-Komposer, to integrate Meteor realtime reactivity within Redux (see [here](https://github.com/kadirahq/react-komposer))
- BabelJS (ES2015 transpiler)
- Unit Testing with Enzyme, Mocha and Chai
- mupx (Meteor Up) for production deployments

![Screenshot](/assets/fastlanes.png?raw=true)