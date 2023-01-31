import Icon from '../../components/svg'
import Item from './item'

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
      demo: 'https://weather.alpfreda.me/',
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
      demo: 'https://countries.alpfreda.me',
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
      demo: 'https://alpfreda.me',
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
        {portfolios.map((portfolio: any) => (
          <Item portfolio={portfolio} />
        ))}
      </div>
    </section>
  )
}

export default Portfolio
