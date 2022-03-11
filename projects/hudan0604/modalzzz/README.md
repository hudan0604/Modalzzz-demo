# Modalzzz

This is a modals library, generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

It enables users to easily add modals to their project

There are 3 availables types of modals : confirm, warning , and custom

## Link to the github repo

Visit https://github.com/hudan0604/Modalzzz-demo for the demo

## First things first

```zsh
 $ npm i @hudan0604/modalzzz
```

- Then, in your app.module.ts file, add 'ModalzzzModule' to the 'imports' of the module
- In your app.component.html file, add the selector of the modal component :
  `<lib-modalzzz></lib-modalzzz>`

## How to open a modal

In the component where you want to open a modal :

- create this property:

```ts
modalStatusSubscription: Subscription | undefined;
```

- add this to the parameters of your constructor:

```ts
  private modalzService: ModalzService
```

- create a method like this one :

```ts
openModal(config: ModalConfig) {
    this.modalStatusSubscription = this.modalzService
      .open({
        // 3 types, either 'confirm' | 'warning' | 'custom'
        type: config.type,
        // Modal title
        title: config.title,
        body: config.body,
        customStyles: config.customStyles,
      })
      .subscribe(({ isModalValidated, isModalClosed }) => {
        if (isModalValidated) {
            /**
             *  Here you can do what you want after knowing that the user has submitted the modal
             * For example : if the modal contains a form, you would wqant to send this data to backend
             * if the server sends a 200 status: this.modalzService.close({ config });
             * If the server sends an error: you could keep the modal opened
            */
          }
        }
        /**
         * This one has to be included in you code
         * because if the user quits the modal,
         * next time he opens it,
         * the observable will still be emitting
         */
        if (isModalClosed) {
          this.modalStatusSubscription?.unsubscribe();
        }
      });
  }
```

- If you want to open the confirmation modal : in your html template just call the openModal() method like this:

```ts
click = "openModal({ type: 'confirm' })";
```

Same for the 'warning' modal :

```ts
click = "openModal({ type: 'warning' })";
```

For the custom modal you can choose to have a title and buttons, you can specify title's background and color, body bg and color, and buttons bg and color too :

```ts
(click)="
          openModal({
            type: 'custom',
            title: 'Other title !',
            body: 'Title with custom bg, custom buttons',
            customStyles: {
              title: {
                background: 'purple',
                color: 'white'
              },
              body: {
                background: '#7b5de8'
              },
              buttons: {
                cancelBtn: {
                  background: 'rgb(225 127 33)'
                },
                submitBtn: {
                  title: 'Other text',
                  background: '#da2c4b'
                }
              }
            }
          })
        "
```
