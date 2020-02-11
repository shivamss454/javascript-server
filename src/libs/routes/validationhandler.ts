import { Request, Response, NextFunction } from 'express';
export default function (config) {
    return (req: Request, res: Response, next: NextFunction): any => {
    
        const errArray  = [];
        const configkeys = Object.keys(config);
        configkeys.forEach(key => {
            const keydata = config[key];
            // console.log('*****', keydata);
            const values = keydata.in.map((location) => {
                // console.log('\n key is',key);
                // console.log('\n key value is',config[key]);
                // console.log('\n value is', req[location][key]);
                // console.log('\n keydata.required', keydata.required);

                if (keydata.required && !req[location][key]) {
                    errArray.push(`${key}  is required`);
                }
                else {
                if (keydata.string && (typeof (req[location][key]) !== 'string')) {
                    // console.log('------if 111');
                    errArray.push(`${key}  is should be string`);
                }
                if (keydata.number && typeof (req[location][key]) !== 'number') {
                    if (key === 'skip' || key === 'limit') {
                       // console.log('key---', key, typeof req[location][key],  isNaN(req[location][key]));
                        // console.log('------parse---', typeof parseInt(req[location][key]))
                        if (isNaN(req[location][key])) {
                            errArray.push(`${key}  is should be number`);
                        }
                    } else {
                    errArray.push(`${key}  is incorrect key`);
                    }
                }

                // console.log('----regex---', keydata.regex);
                const regex = RegExp(keydata.regex);
                // console.log('-----regex-----', regex.test((req[location][key])))
                if (keydata.regex && !regex.test((req[location][key]))) {
                    errArray.push({error: `${key} is not correct`});
                }
                if (keydata.isObject && typeof req[location][key] !== 'object') {
                    errArray.push({error: `${key} should be object`});
                }
            }
                return req[location][key];
            });
        

        });
        if (errArray.length) {
            next({ error: errArray});
        }
        next();
    };
}
