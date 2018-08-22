export const createActionTypeSet = (name) => ({ 
    PENDING: `${name}.PENDING`,
    SUCCESS: `${name}.SUCCESS`,
    ERROR: `${name}.ERROR`,
});