using System.ComponentModel.DataAnnotations;

namespace Backend.Exceptions;

public class FieldValidationException : ValidationException
{
    public string FieldName { get; }

    public FieldValidationException(string fieldName, string message)
        : base(message)
    {
        FieldName = fieldName;
    }
}
