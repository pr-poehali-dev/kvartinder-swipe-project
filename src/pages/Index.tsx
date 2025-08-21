import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Home" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Квартиндер
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-8">
                <a href="#features" className="text-gray-600 hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary">Особенности</a>
                <a href="#download" className="text-gray-600 hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary">Скачать</a>
                <a href="#faq" className="text-gray-600 hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary">FAQ</a>
              </div>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Найди идеального
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  соседа
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Первое приложение для поиска сожителей в стиле Tinder. 
                Свайпай, общайся, находи идеального соседа для совместной аренды жилья.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать приложение
                </Button>
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white px-8">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Telegram бот
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/img/baaf7540-e9f1-4a84-87dc-9a22b9fcd15f.jpg" 
                  alt="Квартиндер приложение"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Почему Квартиндер?</h2>
            <p className="text-xl text-gray-600">Революционный подход к поиску соседей</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Свайпы как в Tinder</h3>
                <p className="text-gray-600">Простой и интуитивный интерфейс. Свайпай вправо, если сосед подходит, влево — если нет.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Settings" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Умная настройка</h3>
                <p className="text-gray-600">Высокая кастомизация предпочтений: бюджет, район, образ жизни, привычки и многое другое.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Безопасность</h3>
                <p className="text-gray-600">Верификация профилей, отзывы от предыдущих соседей и система рейтингов.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MessageSquare" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Удобный чат</h3>
                <p className="text-gray-600">Общайтесь в приложении, обменивайтесь контактами только после взаимной симпатии.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/80 to-accent/80 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Поиск по районам</h3>
                <p className="text-gray-600">Ищите соседей в конкретных районах города, рядом с работой или учебой.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/80 to-primary/80 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Групповой поиск</h3>
                <p className="text-gray-600">Ищите сразу несколько соседей для большой квартиры или дома.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Скачай Квартиндер</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Доступно на всех платформах. Выбери удобный способ и начни поиск идеального соседа уже сегодня!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg">
              <Icon name="Smartphone" size={24} className="mr-3" />
              App Store
            </Button>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg">
              <Icon name="PlayCircle" size={24} className="mr-3" />
              Google Play
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg">
              <Icon name="MessageCircle" size={24} className="mr-3" />
              Telegram бот
            </Button>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Не можешь выбрать?</h3>
            <p className="text-gray-600 mb-6">Попробуй сначала наш Telegram бот — это быстро и не требует установки приложения!</p>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Попробовать бота
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Частые вопросы</h2>
            <p className="text-xl text-gray-600">Ответы на самые популярные вопросы о Квартиндере</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  Как работает алгоритм подбора соседей?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Наш алгоритм анализирует ваши предпочтения: бюджет, район, образ жизни, привычки, график работы и многие другие параметры. Система показывает только тех кандидатов, которые максимально подходят под ваши критерии.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  Безопасно ли пользоваться приложением?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Да! Все профили проходят модерацию, мы проверяем документы пользователей. В приложении есть система рейтингов и отзывов, а также возможность пожаловаться на неподходящее поведение.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  Сколько стоит пользоваться Квартиндером?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Базовые функции бесплатны: регистрация, просмотр анкет, лайки. Premium подписка открывает дополнительные возможности: неограниченные лайки, суперлайки, просмотр кто лайкнул вас.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  В каких городах доступно приложение?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Сейчас Квартиндер работает в Москве, Санкт-Петербурге, Екатеринбурге, Новосибирске и Казани. Планируем запуск в других крупных городах России в ближайшие месяцы.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  Что делать, если не получается найти подходящего соседа?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Попробуйте расширить критерии поиска, обновить фотографии или описание профиля. Наша служба поддержки поможет оптимизировать анкету и даст персональные рекомендации.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Home" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">Квартиндер</h3>
              </div>
              <p className="text-gray-300">Найди идеального соседа для совместной аренды жилья</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Приложение</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">App Store</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Google Play</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Telegram бот</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Следите за нами</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Квартиндер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;