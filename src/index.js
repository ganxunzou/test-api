/**
 * @api {get} /api GetAPI
 * @apiName GetAPI
 * @apiHeader {String} access-key Users unique access-key.
 *  @apiHeaderExample {json} Header-Example:
 *     {
 *       "Accept-Encoding": "Accept-Encoding: gzip, deflate"
 *     }
 * @apiGroup User
 * @apiSchema (User) {jsonschema=./schema/api.req.json} apiParam
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": 4711
 *     }
 * @apiSchema {jsonschema=./schema/api.res.json} apiSuccess
 *  @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost/user/4711
 */
