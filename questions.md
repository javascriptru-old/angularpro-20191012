Дополнительные вопросы

1. @ContentChild('h', { static: true } ) mainContent: TemplateRef<HTMLElement>;
Все заработало. обновил пример. Похоже мы просто забыли передать Contentб поэтому ContentChild был underfined

2. agGrid requires specific Interface from Component 
- решать ли это наследованием или есть другой способ

несколько раз возвращался к этому вопросу.
стоит ли игра свеч?
если нам необходимо просто реализовать интерфейс, который подходит нашему компоненту, даже не смотря на то что это сторонний интерейс - это не так плохо. 
но в случае когда образ компонента, который нам нужно передать сильно отличается, добавляются специальные методы, то тогда, вы правы, действительно лучше сделать наследование,
чтобы не засорять основной компонент.

3. в чем отличие ngComponentOutlet / ngTemplateOutlet от angular/material Portal directives?

ngComponentOutlet/ngTemplateOutlet могут быть использованы только внутри шаблона компонента
https://blog.angularindepth.com/angular-cdk-portals-b02f66dd020c#f4a5

4. Придумать еще задач на DI (там где @Self)

есть

5. а detectChanges - перерисует все дерево или только поддерево?

специально сделал отдельный пример (смотреть ./2-di/di-tree)
где разобраны 2 случая: detectChanges и markForCheck
также учтите что я умышленно выключил зоны ( ngZone: 'noop'), чтобы ничего не добавило лишнего прохода

6. материалы по обнаружению утечек памяти

https://developers.google.com/web/tools/chrome-devtools/memory-problems
https://developers.google.com/web/tools/chrome-devtools/memory-problems/heap-snapshots
https://addyosmani.com/blog/taming-the-unicorn-easing-javascript-memory-profiling-in-devtools/
уже начал готовить интенсив по теме продвинутого использования Chrome Deb Tools

7. где настроить таймфрейм для марблтестов

мы можем гибко управлять задержками во времени:
https://github.com/ReactiveX/rxjs/blob/master/docs_app/content/guide/testing/marble-testing.md#marble-syntax


8. при указании хардкод задержки, все чанки начнутся грузится в одно и то же время

Это не так, смотрите пример в 5-router.


9. nestjs & ssr

Да, вы были правы, у NestJs есть своя обертка( https://github.com/kamilmysliwiec/universal-nest ), но он все равно использует ngExpressEngine.


10. angular animations screencast

загружено в материалы интесива


11. внутри lazy - может быть еще один lazy?

да, все прекрасно работает, в том числе поддерживается стратегия предзагрузки. 
Я расширил пример в директории 5-router - там можно посмотреть


12. audit check for http://books.mts.ru

написали ли вы в суппорт хрома?



Д/З

1. ViewChildren directive change color
2. source code `ngDoBootstrap`
3. Сделать виджет с ViewProviders/Providers и попробовать исползовать сервисы в обоих случаях
4. Сделать библиотеку с ViewProviders и Providers, подключить ее к приложению и попробовать использовать провайдеры библиотеки
5. В библиотеки из пункта выше сделать @Self, с помощью которого заинжектировать провайдер билблиотеки.
6. Оптимизировать (NgZone, OnPush, detach) - https://stackblitz.com/edit/angular-perf?file=src/app/app.component.ts
7. Выключить NgZone и запускать CD вручную

