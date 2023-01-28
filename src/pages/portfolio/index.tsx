import Icon from '../../components/svg'
import { IconTypes } from '../../ts/types/icon-types'

const Portfolio = () => {
  const portfolios = [
    {
      name: 'Weather',
      description: 'test',
      skills: [
        {
          icon: 'react-icon',
          name: 'React',
        },
        {
          icon: 'js',
          name: 'Javascript',
        },
        {
          icon: 'sass',
          name: 'Sass',
        },
      ],
      source: 'https://github.com/alpfreda/weather-app',
      demo: 'https://www.weather.alpfreda.me',
    },
    {
      name: 'Countries',
      description: 'test',
      skills: [
        {
          icon: 'react-icon',
          name: 'React',
        },
        {
          icon: 'typescript',
          name: 'Typescript',
        },
        {
          icon: 'material-ui',
          name: 'Material Ui',
        },
      ],
      source: 'https://github.com/alpfreda/countries',
      demo: 'https://www.countries.alpfreda.me',
    },
    {
      name: 'Blog',
      description: 'test',
      skills: [
        {
          icon: 'react-icon',
          name: 'React',
        },
        {
          icon: 'typescript',
          name: 'typescript',
        },
        {
          icon: 'sass',
          name: 'Sass',
        },
        {
          icon: 'jest',
          name: 'Jest',
        },
      ],
      source: 'https://github.com/alpfreda/countries',
      demo: 'https://www.alpfreda.me',
    },
    {
      name: 'Svg Widget',
      description: 'test',
      skills: [
        {
          icon: 'react-icon',
          name: 'React',
        },
        {
          icon: 'js',
          name: 'Javascript',
        },
        {
          icon: 'sass',
          name: 'Sass',
        },
      ],
      source: 'https://github.com/alpfreda/react-simple-widget',
      demo: 'https://svg-widget.alpfreda.me/',
    },
    {
      name: 'Old blog',
      description: 'test',
      skills: [
        {
          icon: 'react-icon',
          name: 'React',
        },
        {
          icon: 'js',
          name: 'Javascript',
        },
        {
          icon: 'sass',
          name: 'Sass',
        },
      ],
      source: 'https://github.com/alpfreda/jsgeekes',
      demo: 'https://old.alpfreda.me/',
    },
  ]

  return (
    <section className='portfolio-content'>
      <h2 className='title'>Portfolio</h2>
      <div className='portfolio-grid'>
        {portfolios.map(portfolio => (
          <div className='portfolio-item'>
            <h3>{portfolio.name}</h3>
            <div className='portfolio-item-skills'>
              {portfolio.skills.map(skill => (
                <div className='portfolio-item-skills-item'>
                  <Icon
                    className='portfolio-item-skills-icon'
                    name={skill.icon as IconTypes}
                  />
                  {skill.name}
                </div>
              ))}
            </div>
            <div className='portfolio-item-skills-action'>
              <a href={portfolio.demo}>Demo</a>
              <a href={portfolio.source}>Source</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
