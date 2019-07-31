# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.inline_response200 import InlineResponse200  # noqa: E501
from swagger_server.test import BaseTestCase


class TestDevopsController(BaseTestCase):
    """DevopsController integration test stubs"""

    def test_simple_health_check(self):
        """Test case for simple_health_check

        simple healthcheck
        """
        response = self.client.open(
            '/awadallah/VaultsManager/1.0.0/health',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
