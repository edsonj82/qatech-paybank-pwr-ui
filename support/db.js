import pgPromise from 'pg-promise';

const pgp = pgPromise();
const db = pgp('postgresql://dba:dba@paybank-db:5432/UserDB');

export async function getCode2FA(cpf) {
    const query = `
    SELECT tfc.code
	FROM public."TwoFactorCode" tfc
	JOIN public."User" u ON tfc."userId" = u.id
    WHERE u.cpf = '${cpf}'
    ORDER BY tfc.id DESC
	LIMIT 1;
    `
    const result = await db.oneOrNone(query)
    return result.code

}


