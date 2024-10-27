import {
    ClockIcon,
    InboxIcon,
    QuestionMarkCircleIcon,
    ShieldCheckIcon,
    TrashIcon,
    UsersIcon
} from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Support 24/7',
        description:
            'Disponibles 24h/24 et 7j/7, nos experts répondent à vos appels en cas d’urgence, pour garantir votre tranquillité à tout moment.',
        href: '#',
        icon: ClockIcon,
    },
    {
        name: 'Équipe professionnelle',
        description:
            'Nos serruriers expérimentés et qualifiés sont prêts à intervenir rapidement et efficacement pour tous vos besoins en serrurerie.',
        href: '#',
        icon: ShieldCheckIcon,
    },
    {
        name: 'Conseils personnalisés',
        description:
            'Nous vous aidons à choisir les meilleures solutions de sécurité pour votre domicile ou votre entreprise, en fonction de vos besoins spécifiques.',
        href: '#',
        icon: QuestionMarkCircleIcon,
    },
]

export default function Features() {
    return (
      <div className="bg-white py-24 sm:py-32" id={'apropos'}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 underline decoration-primary-400 underline-offset-8 sm:text-5xl">
              À propos de nous
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Notre équipe est là pour vous accompagner à chaque étape. Que ce soit pour un dépannage d’urgence ou pour
              des conseils en sécurité, nous sommes disponibles pour répondre à toutes vos questions.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-400">
                      <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                    </div>
                      <h3 className={'text-xl'}>{feature.name}</h3>
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto text-md">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
}
