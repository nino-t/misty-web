import React from 'react'

class DashboardPage extends React.Component {
  render(): JSX.Element {
    return (
      <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div
          className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          <div className="font-sans">
            <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
              Welcome to React Boilerplate
            </h1>
            <p className="text-sm md:text-base font-normal text-gray-600">Published 26 April 2021</p>
          </div>

          <p className="py-6">
            👋 Welcome fellow{' '}
            <a className="text-green-500 no-underline hover:underline" href="https://www.tailwindcss.com">
              Tailwind CSS
            </a>{' '}
            and miminal monochrome blog fan. This starter template provides a starting point to create your own minimal
            monochrome blog using Tailwind CSS and vanilla Javascript.
          </p>

          <p className="py-6">
            The basic blog page layout is available and all using the default Tailwind CSS classes (although there are a
            few hardcoded style tags). If you are going to use this in your project, you will want to convert the
            classes into components.
          </p>

          <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
            Example of blockquote - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
            commodo posuere et sit amet ligula.
          </blockquote>
        </div>
      </div>
    )
  }
}

export default DashboardPage
