module.exports = {
  title: 'Shader Park',
  description: 'References & Examples',
  plugins: {
    mathjax: {
      target: 'chtml',
      presets: [
        '\\def\\lr#1#2#3{\\left#1#2\\right#3}',
      ]
    },
  },
  themeConfig: {
    nav: [
      // {text: 'About', link: '/'}, {text: 'Getting Started', link: '/tutorials/'},
      { text: 'References GLSL', link: '/references/' },
      { text: 'References JS', link: '/references-js/' },
      {text: 'Home', link: 'https://shader-park.appspot.com'}
    ],
    // sidebar: 'auto'
    sidebar: {
      '/references-js/': [
        {
          title: 'Geometry',
          sidebarDepth: 3,
          collapsable: true,
          children: [
            {
              title: 'Primitives',
              children: [
                '/references-js/geometries/sphere',
                '/references-js/geometries/box',
                '/references-js/geometries/torus',
                '/references-js/geometries/line',
                '/references-js/geometries/cylinder',
              ]
            },
            {
              title: 'Construction Modes',
              children: [
                '/references-js/operations/union',
                '/references-js/operations/difference',
                '/references-js/operations/intersect',
                '/references-js/operations/blend',
                '/references-js/operations/mixGeo',
              ]
            },
            {
              title: 'Modifiers',
              children: [
                '/references-js/operations/shell',
                '/references-js/operations/expand',
                '/references-js/operations/setSDF',
              ]
            },
            {
              title: 'Composition',
              children: [
                '/references-js/geometries/shape',
              ]
            },
            
          ]
        },
        {
          collapsable: true,
          title: 'Coordinate Space Modifiers',
          children: [
            '/references-js/operations/displace',
            '/references-js/operations/mirrorX',
            '/references-js/operations/mirrorY',
            '/references-js/operations/mirrorZ',
            '/references-js/operations/mirrorXYZ',
            '/references-js/operations/rotateX',
            '/references-js/operations/rotateY',
            '/references-js/operations/rotateZ',
            '/references-js/operations/reset',
          ]
        },
        {
          title: 'Material',
          collapsable: true,
          children: [
            '/references-js/color/color',
            '/references-js/color/metal',
            '/references-js/color/shine',
            '/references-js/color/hsv2rgb',
            '/references-js/color/occlusion',
            
            {
              title: 'Lighting',
              children: [
                '/references-js/color/noLighting',
                '/references-js/color/lightDirection'
              ]
            }
          ]
        },
        {
          title: 'Input',
          collapsable: true,
          children: [
            {
              title: 'Space & Time',
              children: [
                '/references-js/input/time',
                '/references-js/input/normal'
              ]
            },
            {
              title: 'Interactive',
              children: [
                '/references-js/input/input',
                '/references-js/input/mouse',
                '/references-js/input/mouseIntersection'
              ]
            },

          ]
        },
        {
          title: 'Math',
          collapsable: true,
          children: []
        },
        {
          title: 'Algorithms',
          collapsable: true,
          children: [
            '/references-js/algorithms/noise', 
            '/references-js/algorithms/fractalNoise',
            '/references-js/algorithms/sphericalDistribution'
          ]
        },
        {
          title: 'Constants',
          collapsable: true,
          children: []
        },
        {
          title: 'Global Settings',
          collapsable: true,
          children: [
            '/references-js/global-settings/setGeometryQuality',
            '/references-js/global-settings/setStepSize',
          ]
        }

        
      ],
      '/references/' : 
      [
        {
          title: 'Geometries',
          collapsable: false,
          children: [
            '/references/geometries/sphere', 
            '/references/geometries/box', 
            '/references/geometries/torus', 
            '/references/geometries/line',
            '/references/geometries/cylinder',
            '/references/geometries/ellipsoid',
            '/references/geometries/roundedBox'
          ]
        },
        {
          title: 'Modifiers',
          collapsable: false,
          children: [
            '/references/operations/add',
            '/references/operations/subtract',
            '/references/operations/intersect',
            '/references/operations/smoothAdd',
            '/references/operations/shell',
            '/references/operations/mix',
          ]
        },
        {
          title: 'Lighting',
          collapsable: false,
          children: [
            '/references/lighting/simpleLighting',
            '/references/lighting/specularLighting',
            '/references/lighting/occlusion',
          ]
        },
        {
          title: 'Color',
          collapsable: false,
          children: [
            '/references/color/hsv2rgb',
            '/references/color/rgb2hsv',
          ]
        },
        {
          title: 'Math',
          collapsable: false,
          children: [
            '/references/math/fromSpherical',
            '/references/math/toSpherical',
            '/references/math/getRayDirection',
            '/references/math/rot2',
            '/references/math/softSquare',
            '/references/math/sphericalDistribution',
          ]
        },
        {
          title: 'Noise',
          collapsable: false,
          children: [
            '/references/noise/noise',
            '/references/noise/fractalNoise',
          ]
        },
        {
          title: 'Interactive',
          collapsable: false,
          children: [
            '/references/mouse-interactions/mouse',
            '/references/mouse-interactions/mouseIntersection',
          ]
        }
      ]
    },
    repo: 'bnanner/Shader-Park-Docs',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    // repoLabel: 'Edit this page!',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    // docsRepo: 'vuejs/vuepress',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',
    dest: '/client'
  }
}
