import { Request, Response, NextFunction } from 'express';
export default function (config) {
    return (req: Request, res: Response, next: NextFunction): any => {
    
        const errArray  = [];
        const configkeys = Object.keys(config);
        configkeys.forEach(key => {
            const keydata = config[key];
            
            const values = keydata.in.map((location) => {
                
                if (keydata.required && !req[location][key]) {
                    errArray.push(`${key}  is required`);
                }
                else {
                if (keydata.string && (typeof (req[location][key]) !== 'string')) {
                    
                    errArray.push(`${key}  is should be string`);
                }
                if (keydata.number && typeof (req[location][key]) !== 'number') {
                    if (key === 'skip' || key === 'limit') {
                       
                        if (isNaN(req[location][key])) {
                            errArray.push(`${key}  is should be number`);
                        }
                    } else {
                    errArray.push(`${key}  is incorrect key`);
                    }
                }

                ;
                const regex = RegExp(keydata.regex);
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
