import { Request, Response, NextFunction } from 'express';
import { isNumber } from 'util';
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
                if (keydata.number && (req[location][key])) {
                        const n = Number(req[location][key]);
                        console.log(n);
                        if (isNaN(n)) {
                            errArray.push(`${key}  is should be number`);
                        }
                }
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
