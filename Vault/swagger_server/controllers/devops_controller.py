import connexion
import six

from swagger_server.models.inline_response200 import InlineResponse200  # noqa: E501
from swagger_server import util


def simple_health_check():  # noqa: E501
    """simple healthcheck

    a simple health check endpoint to ensure the API is running   # noqa: E501


    :rtype: InlineResponse200
    """
    return 'do some magic!'
