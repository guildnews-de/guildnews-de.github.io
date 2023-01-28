export default function wpsc(args) {
     let output: String = `[gw2emb_${args['embed']}`;
     delete(args['embed']);

     let keys = Object.keys(args);
     keys.forEach(key => {
          console.log(args[key])
          output += ` ${key}="${args[key]}"`
     });

     return `${output} ]`;
}