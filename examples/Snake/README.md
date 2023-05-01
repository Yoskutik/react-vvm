# React VVM Preview

## Articles reader (+ DI)

This example is created to demonstrate the possibilities of the DI pattern in ViewModel's.

Tiles view model is responsible for a logic of a single view. But there are can be cases when you need to
create an object containing logic for different parts of your application. And with the DI you can
make it much easier.

In this example there's several articles. You can read them and you can more articles. There's also
a statistic collection of how many articles have you read.

There's no point to keep this statistic inside a view model, so there should be some other extra
object. I call it `ArticlesService`.

There's also a `SnackService` - a class that can create a snack from anywhere.

This example is using the next versions of the libraries:

* `react` - 18
* `react-dom` - 18
* `mobx` - 5
* `mobx-react` - 6
