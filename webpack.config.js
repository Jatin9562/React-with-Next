plugins: [
   new webpack.ProvidePlugin({
      "React": "react",
   }),
]

module: {
   loaders: [
     {
       test: /\.js?$/,
       exclude: /(node_modules|bower_components)/,
       loaders: [
         'react-hot',
         'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
       ],
       options: { plugins: ['transform-class-properties']}
     }
   ]
 }